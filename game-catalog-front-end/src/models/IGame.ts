export default interface IGame {
  id: number;
  title: string;
  year: string;
  console: string;
  completed: boolean;
  dateOfCompletion: Date;
  personalNotes: string;
}
