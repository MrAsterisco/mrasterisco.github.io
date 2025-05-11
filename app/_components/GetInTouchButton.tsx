import Button from "./Button";

interface GetInTouchButtonProps {
  className?: string;
}

export default function GetInTouchButton({
  className,
}: GetInTouchButtonProps) {
  return (
    <Button
      className={className}
      href={"https://www.linkedin.com/in/alessiomoiso1993/"}
      target='_blank'
      title='Get in Touch' />
  );
}