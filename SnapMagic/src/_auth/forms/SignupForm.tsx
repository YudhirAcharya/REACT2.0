import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupValidation } from "@/lib/validation";
import { z } from "zod";
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";

import { useCreateUserAccountMutaion } from "@/lib/react-query/queriesAndMutations";

const SignupForm = () => {
  const { toast } = useToast();

  const {
    mutateAsync: createUserAccount,
    isLoading: isCreatingUser,
  } = useCreateUserAccountMutaion;

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });
  //2 define submit handler
  async function onSubmit(
    values: z.infer<typeof SignupValidation>
  ) {
    const newUser = await createUserAccount(values);
    if (!newUser) {
      return toast({
        title: "Sign up failed. Please try again.",
      });
    }
    // const session = await signInAccount();
  }

  return (
    <div>
      <Form {...form}>
        <div className=" sm:w-420 flex-center flex-col">
          <img src="/assets/images/logo.svg" alt="logo" />
          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
            Create a new acoount
          </h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            To use Snapmagic enter your details
          </p>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-full  gap-5 mt-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Andy Li"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Andy_Li"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="AndyLi@abc.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="shad-button_primary h-12 "
              type="submit"
            >
              {isCreatingUser ? (
                <div className="flex flex-row  flex-center gap-2">
                  <Loader /> Loading
                </div>
              ) : (
                "Sign Up"
              )}
            </Button>
            <p className="text-small-regular text-light-2 text-centre mt-2">
              Already have an account?
              <Link
                to="/sign-in"
                className="text-primary-500"
              >
                {" "}
                Log In
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
