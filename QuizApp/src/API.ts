//for fetching the data

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: SVGAnimatedNumberList,
  difficulty: Difficulty
): Promise<[]> => {};
