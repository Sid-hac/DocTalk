import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex justify-center items-center min-w-screen h-screen m-10" >
            <SignUp/>
        </div>
    );
}