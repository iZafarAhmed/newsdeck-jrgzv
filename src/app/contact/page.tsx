
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Pin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
        </p>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="size-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:contact@newslisted.com" className="text-muted-foreground hover:text-primary">
                  contact@newslisted.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="size-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Pin className="size-6 text-primary" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-muted-foreground">123 News Avenue, Suite 100<br />New York, NY 10001, USA</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
