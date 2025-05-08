
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, User, Mail, Music, Clock, Package, FileText, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const eventTypes = [
  { value: "anniversary", label: "Anniversaire" },
  { value: "wedding", label: "Mariage" },
  { value: "loveDeclaration", label: "Déclaration d'amour" },
  { value: "promo", label: "Vidéo promotionnelle" },
  { value: "ad", label: "Publicité" },
  { value: "other", label: "Autre" },
];

const musicStyles = [
  { id: "afrobeat", label: "Afro beat (ex : Naza)" },
  { id: "gospel", label: "Gospel inspirant" },
  { id: "trap", label: "Trap / Drill Egotrip" },
  { id: "rnb", label: "Love / RnB" },
  { id: "traditional", label: "Ambiance traditionnelle (Tchink, Zouk, Gahu...)" },
  { id: "dynamic", label: "Pub / Promo dynamique" },
  { id: "futuristic", label: "Sound design futuriste" },
  { id: "other", label: "Autre" },
];

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  contact: z.string().min(5, { message: "Veuillez fournir un email ou un numéro WhatsApp valide" }),
  deliveryDate: z.date({
    required_error: "Veuillez sélectionner une date de livraison",
  }),
  eventType: z.string({
    required_error: "Veuillez sélectionner un type d'événement",
  }),
  includeMessage: z.string().min(1, { message: "Ce champ est requis" }),
  musicStyles: z
    .array(z.string())
    .refine((value) => value.length > 0, {
      message: "Vous devez sélectionner au moins un style de musique",
    }),
  urgencyLevel: z.enum(["standard", "urgent"], {
    required_error: "Veuillez sélectionner un niveau d'urgence",
  }),
  deliveryMethod: z.string({
    required_error: "Veuillez sélectionner un mode de livraison",
  }),
  additionalInfo: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter les conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function QuoteForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      contact: "",
      includeMessage: "",
      musicStyles: [],
      urgencyLevel: "standard",
      deliveryMethod: "drive",
      additionalInfo: "",
      termsAccepted: false,
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    try {
      // Préparation des données pour l'API Resend
      const requestData = {
        fullName: data.fullName,
        contact: data.contact,
        deliveryDate: format(data.deliveryDate, "dd/MM/yyyy", { locale: fr }),
        eventType: eventTypes.find(type => type.value === data.eventType)?.label || data.eventType,
        includeMessage: data.includeMessage,
        musicStyles: data.musicStyles.map(style => {
          const styleObj = musicStyles.find(s => s.id === style);
          return styleObj ? styleObj.label : style;
        }).join(", "),
        urgencyLevel: data.urgencyLevel === "standard" 
          ? "Standard (livraison sous 24h)" 
          : "Urgente (moins de 24h +30%)",
        deliveryMethod: data.deliveryMethod,
        additionalInfo: data.additionalInfo || "Aucune information supplémentaire",
      };
      
      // Envoi de la demande avec Resend API
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      
      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de l\'envoi de la demande');
      }
      
      toast({
        title: "Demande envoyée !",
        description: "Nous avons bien reçu votre demande de devis. Nous vous répondrons dans les plus brefs délais.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer ultérieurement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Demande de devis personnalisé</h2>
        <p className="text-gray-600">
          Transformez chaque événement en souvenir inoubliable avec un son personnalisé signé Mind Crafter
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Nom et Prénoms <span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Votre nom complet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Adresse email ou contact WhatsApp <span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="email@exemple.com ou +33 6 XX XX XX XX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="deliveryDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Date de livraison souhaitée <span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "dd/MM/yyyy", { locale: fr })
                        ) : (
                          <span>Sélectionner une date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      locale={fr}
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type d'événement <span className="text-red-500">*</span></FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner le type d'événement" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="includeMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Prénom ou message à inclure dans le son <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Joyeux anniversaire Marie" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="musicStyles"
            render={() => (
              <FormItem>
                <div className="mb-2 flex items-center">
                  <Music className="w-4 h-4 mr-2" />
                  <FormLabel>Style de musique préféré <span className="text-red-500">*</span></FormLabel>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {musicStyles.map((style) => (
                    <FormField
                      key={style.id}
                      control={form.control}
                      name="musicStyles"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={style.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(style.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, style.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== style.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              {style.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="urgencyLevel"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <FormLabel>Niveau d'urgence de la commande <span className="text-red-500">*</span></FormLabel>
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-3"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="standard" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Standard (livraison sous 24h - tarif normal)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="urgent" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Urgente (moins de 24h +30% du tarif)
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="deliveryMethod"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <Package className="w-4 h-4 mr-2" />
                  <FormLabel>Mode de livraison souhaité <span className="text-red-500">*</span></FormLabel>
                </div>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner le mode de livraison" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="drive">Lien Google Drive</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="usb">Clé USB (remise en main propre uniquement)</SelectItem>
                    <SelectItem value="other">Autre (à préciser dans les remarques)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <FormLabel>Remarque ou instructions supplémentaires</FormLabel>
                </div>
                <FormControl>
                  <Textarea
                    placeholder="Précisez ici toute information complémentaire utile à la création de votre son personnalisé"
                    className="resize-none min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="flex items-center">
                    <Check className="w-4 h-4 mr-2" />
                    J'ai compris que Mind Crafter me contactera pour finaliser ma commande <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormDescription>
                    Un email ou message WhatsApp vous sera envoyé pour confirmer les détails et le tarif.
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Button 
              type="submit" 
              className="w-full bg-freelance-primary hover:bg-freelance-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
