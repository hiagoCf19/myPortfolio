interface ProgressProps {
  activated: boolean;
}
const Progress = ({ activated }: ProgressProps) => {
  return (
    <div
      className={`${
        activated ? "bg-primary scale-150" : "bg-muted-foreground/30"
      } w-2 h-2 rounded-full mx-1 my-1`}
    />
  );
};

export default Progress;
