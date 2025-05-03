import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "~/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="bg-white shadow-sm px-5 font-poppins text-black">
      <div className="inner-wrapper">
        <nav className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src="/icons/icon_wo_bg.svg"
              alt="Logo"
              width={100}
              height={100}
              loading="eager"
            />
          </Link>
          <div className="flex items-center">
            {session && session?.user
              ? (
                <div className="flex items-center gap-4">
                  <Link href={"/startup/create"}>
                    <span>Create</span>
                  </Link>
                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/" });
                    }}
                  >
                    <button type="submit">
                      <span>Sign Out</span>
                    </button>
                  </form>
                  <Link href={`/user/${session.user.id}`}>
                    <Image
                      src={session.user.image ||
                        "https://avatar.iran.liara.run/public" ||
                        "/icons/user_ph.png"}
                      alt="User Image"
                      width={50}
                      height={50}
                      className="rounded-full"
                      loading="eager"
                    />
                  </Link>
                </div>
              )
              : (
                <form
                  action={async () => {
                    "use server";
                    await signIn("github");
                  }}
                >
                  <button type="submit">Sign In</button>
                </form>
              )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
