declare type GuessTypes = 'scissors' | 'rocks' | 'papers'

declare type Option = {
  value: string;
  x: number;
  y: number;
  id: string;
}

declare type OptionsState = {
  scissors: Option[];
  rocks: Option[];
  papers: Option[];
  [key: string]: Option[];
}

declare type Game = {
  guess: GuessTypes | '';
  setGuess: React.Dispatch<React.SetStateAction<GuessTypes | ''>>;
  options: OptionsState;
  dispatch: React.Dispatch<Action>;
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}
