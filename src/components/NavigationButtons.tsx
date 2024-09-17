import { Button } from "@transcarent/foundation";
import { useLocation } from "wouter";

export function NavigationButtons() {
  const [, navigate] = useLocation();
  return (
    <>
      <Button
        onClick={() => {
          navigate("/page-a");
        }}
      >
        Go to page A
      </Button>
      <Button
        onClick={() => {
          navigate("/page-b");
        }}
      >
        Go to page B
      </Button>
    </>
  );
}
