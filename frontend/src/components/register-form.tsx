import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import background_image from "@/assets/background-image.webp"
import { useState } from "react"
import { register } from "@/lib/services"

export function RegisterForm(
  {
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await register({ username, email, password })

      const accessToken = response.data.jwt;
      console.log("aT: ", accessToken)
      localStorage.setItem("accessToken", accessToken);
      navigate("/");
    } catch (error:any) {
      setError(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-balance text-muted-foreground">
                  Create your Fishkey account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-destructive">{error}</p>}
              <Button type="button" onClick={handleSubmit} className="w-full">
                Register
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/login" className="underline underline-offset-4">
                  Login
                </a>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src={background_image}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
