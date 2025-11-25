import { Building } from "lucide-react";

const clients = [
  { name: "Indústria Global", icon: <Building className="h-10 w-10 text-muted-foreground" /> },
  { name: "Tech Corp", icon: <Building className="h-10 w-10 text-muted-foreground" /> },
  { name: "Agro Solutions", icon: <Building className="h-10 w-10 text-muted-foreground" /> },
  { name: "Farma Health", icon: <Building className="h-10 w-10 text-muted-foreground" /> },
  { name: "Auto Parts", icon: <Building className="h-10 w-10 text-muted-foreground" /> },
];


export function Clients() {
    return (
        <section className="py-20 sm:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-center text-lg font-semibold uppercase tracking-wider text-primary">
                    Confiança que impulsiona grandes indústrias
                </h2>
                <div className="mt-10 grid grid-cols-2 items-center justify-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
                    {clients.map((client) => (
                         <div key={client.name} className="flex flex-col items-center gap-2">
                             {client.icon}
                            <span className="text-sm font-medium text-muted-foreground">{client.name}</span>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    )
}