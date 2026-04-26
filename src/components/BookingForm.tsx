import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarIcon, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fleet } from "@/data/fleet";
import { whatsappLink } from "@/lib/whatsapp";

const serviceOptions = [
  "Airport Transfer",
  "Corporate Chauffeur",
  "Weddings & Events",
  "City Tours",
  "Inter-state Travel",
  "Other",
];

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  pickup: z.string().min(2, "Pickup location required"),
  dropoff: z.string().min(2, "Drop-off location required"),
  date: z.string().min(1, "Pick a date"),
  vehicle: z.string().min(1, "Select a vehicle"),
  service: z.string().min(1, "Select a service"),
  message: z.string().optional(),
});

export type BookingValues = z.infer<typeof schema>;

interface Props {
  prefill?: Partial<BookingValues>;
  className?: string;
}

export function BookingForm({ prefill, className }: Props) {
  const form = useForm<BookingValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      pickup: "",
      dropoff: "",
      date: "",
      vehicle: prefill?.vehicle ?? "",
      service: prefill?.service ?? "",
      message: prefill?.message ?? "",
    },
  });

  useEffect(() => {
    if (prefill?.vehicle) form.setValue("vehicle", prefill.vehicle);
    if (prefill?.service) form.setValue("service", prefill.service);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill?.vehicle, prefill?.service]);

  const onSubmit = (values: BookingValues) => {
    toast.success("Reservation request received", {
      description: "We'll confirm availability shortly. Continue on WhatsApp for instant booking.",
      action: {
        label: "Open WhatsApp",
        onClick: () => {
          const msg = `Hello Whyte Cars 👋,\nI'd like to book the ${values.vehicle} for ${values.service}.\nName: ${values.name}\nDate: ${values.date}\nPickup: ${values.pickup}\nDrop-off: ${values.dropoff}\nPhone: ${values.phone}`;
          window.open(whatsappLink(msg), "_blank");
        },
      },
    });
    form.reset({ ...form.getValues(), name: "", email: "", phone: "", pickup: "", dropoff: "", date: "", message: "" });
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={`grid gap-5 rounded-lg border border-border bg-card/60 p-6 shadow-luxe md:p-8 ${className ?? ""}`}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" error={form.formState.errors.name?.message}>
          <Input placeholder="Adaeze Okafor" {...form.register("name")} />
        </Field>
        <Field label="Email" error={form.formState.errors.email?.message}>
          <Input type="email" placeholder="you@email.com" {...form.register("email")} />
        </Field>
        <Field label="Phone" error={form.formState.errors.phone?.message}>
          <Input placeholder="+234 ..." {...form.register("phone")} />
        </Field>
        <Field label="Pickup Date" error={form.formState.errors.date?.message}>
          <div className="relative">
            <Input type="date" {...form.register("date")} />
            <CalendarIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </Field>
        <Field label="Pickup Location" error={form.formState.errors.pickup?.message}>
          <Input placeholder="e.g. Lagos Airport" {...form.register("pickup")} />
        </Field>
        <Field label="Drop-off Location" error={form.formState.errors.dropoff?.message}>
          <Input placeholder="e.g. Eko Hotel, VI" {...form.register("dropoff")} />
        </Field>
        <Field label="Vehicle" error={form.formState.errors.vehicle?.message}>
          <Select
            value={form.watch("vehicle")}
            onValueChange={(v) => form.setValue("vehicle", v, { shouldValidate: true })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose a vehicle" />
            </SelectTrigger>
            <SelectContent>
              {fleet.map((v) => (
                <SelectItem key={v.slug} value={v.name}>
                  {v.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Service" error={form.formState.errors.service?.message}>
          <Select
            value={form.watch("service")}
            onValueChange={(v) => form.setValue("service", v, { shouldValidate: true })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Service type" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field label="Message (optional)">
        <Textarea
          rows={4}
          placeholder="Tell us about flight numbers, number of guests, special requests..."
          {...form.register("message")}
        />
      </Field>
      <Button type="submit" size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold hover:opacity-90">
        <Send className="mr-2 h-4 w-4" />
        Reserve Vehicle
      </Button>
    </form>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
