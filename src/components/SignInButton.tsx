import { redirect, RedirectType } from "next/navigation";

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await redirect("/signin?callbackUrl=/", RedirectType.push);
      }}
    >
      <button
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        type="submit"
      >
        登录系统
      </button>
    </form>
  );
}
