import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const sections = [
        {
            title: "What Is HIV?",
            content:
                "HIV (Human Immunodeficiency Virus) is a virus that attacks the body’s immune system, specifically the CD4 cells (T cells), which help the immune system fight infections. If left untreated, HIV can lead to AIDS (Acquired Immunodeficiency Syndrome). Unlike some other viruses, the human body cannot completely get rid of HIV, meaning that once someone has it, they will have it for life.",
        },
    ];

    const data = [
        {
            title: "What is AIDS?",
            content: (
                <div>
                    <p className="text-xs md:text-sm font-normal mb-8">
                        AIDS is the final stage of HIV infection, and not everyone with HIV will develop AIDS. With proper medical care, HIV can be controlled, and people living with the virus can lead long, healthy lives.
                    </p>
                    <div className="grid grid-cols-2 gap-4"></div>
                </div>
            ),
        },
        {
            title: "How Is HIV Transmitted?",
            content: (
                <div>
                    <p className="text-xs md:text-sm font-normal mb-8">
                        HIV is transmitted through various ways, including:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Unprotected sexual contact with an infected person</li>
                        <li>Sharing needles or syringes</li>
                        <li>From mother to child during childbirth or breastfeeding</li>
                    </ul>
                    <div className="grid grid-cols-2 gap-4"></div>
                </div>
            ),
        },
        {
            title: "Prevention",
            content: (
                <div>
                    <p className=" text-xs md:text-sm font-normal mb-4">
                        Preventative measures include using protection, regular testing, and antiretroviral treatment.
                    </p>
                    <div className="mb-8"></div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Timeline data={data} sections={sections} />
        </div>
    );
}
