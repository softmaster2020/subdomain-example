import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  project_details: z.string().trim().min(1, "Tell us a little about your project").max(2000),
});

const field = "w-full rounded-xl border bg-card px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "project_details" | "form", string>>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("demo_requests").insert(parsed.data);
    if (error) { setErrors({ form: "Something went wrong. Please try again." }); setStatus("idle"); return; }
    form.reset();
    setStatus("done");
  }

  if (status === "done")
    return <div className="rounded-2xl border bg-card p-8 text-center"><p className="text-2xl font-extrabold">Request received.</p><p className="mt-2 text-muted-foreground">Thanks — we'll be in touch soon.</p></div>;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-2xl border bg-card p-5 text-left shadow-xl shadow-primary/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-bold">Name<input name="name" maxLength={100} className={field} autoComplete="name" />{errors.name && <span className="font-normal text-destructive">{errors.name}</span>}</label>
        <label className="grid gap-1.5 text-sm font-bold">Email<input name="email" type="email" maxLength={255} className={field} autoComplete="email" />{errors.email && <span className="font-normal text-destructive">{errors.email}</span>}</label>
      </div>
      <label className="grid gap-1.5 text-sm font-bold">Project details<textarea name="project_details" rows={5} maxLength={2000} className={field} placeholder="Genre, episode count, timeline, script status…" />{errors.project_details && <span className="font-normal text-destructive">{errors.project_details}</span>}</label>
      {errors.form && <p className="text-sm text-destructive">{errors.form}</p>}
      <button disabled={status === "sending"} className="btn-primary w-full sm:w-auto sm:justify-self-start">{status === "sending" ? "Sending…" : "Request a demo"}</button>
    </form>
  );
}
