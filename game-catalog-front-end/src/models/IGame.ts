export default interface IGame {
  id: number;
  title: string;
  year: number;
  console: string;
  completed: boolean;
  dateOfCompletion?: Date;
  personalNotes: string;
}
