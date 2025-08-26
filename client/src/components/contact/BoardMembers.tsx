import { Card } from "@/components/ui/card";
import BoardMember, { BoardMemberData } from "./BoardMember";

// Import team member images
import cryptoguideImage from "@assets/Cryptoguide_1755805248345.jpg";
import yanImage from "@assets/Yan-Swan_1755805253984.jpg";
import moritzImage from "@assets/Moritz_1755805413765.jpg";
import stepanImage from "@assets/Stepan-Snigirev_1755804956177.jpg";
import kimImage from "@assets/Kim_1755804970556.jpg";
import poltoImage from "@assets/polto_1755804982512.jpg";
import thomasImage from "@assets/Thomas_1755804997253.jpg";

const boardMembers: BoardMemberData[] = [
  // Board of Directors
  {
    name: "CryptoGuide",
    image: cryptoguideImage,
    role: "Board of Directors",
    roleColor: "coral",
    description: "Revived the Specter Shield with his PCB skills and created the cost-effective Shield Lite version.",
    socialLinks: [
      { type: "x", url: "https://x.com/YTCryptoGuide" },
      { type: "website", url: "https://cryptoguide.tips/shop/" }
    ]
  },
  {
    name: "Yan",
    image: yanImage,
    role: "Board of Directors",
    roleColor: "coral",
    description: "Co-founder of Swan and a crucial bridge in transferring Specter into the hands of the community.",
    socialLinks: [
      { type: "x", url: "https://x.com/skwp" },
      { type: "website", url: "https://www.swanbitcoin.com/" }
    ]
  },
  // Honorary Members
  {
    name: "Moritz Wietersheim",
    image: moritzImage,
    role: "Honorary Member",
    roleColor: "gray",
    description: "The founding partner who teamed up with Stepan to establish the company Specter Solutions.",
    socialLinks: [
      { type: "x", url: "https://x.com/MWietersheim" },
      { type: "linkedin", url: "https://www.linkedin.com/in/moritzwietersheim/" }
    ]
  },
  {
    name: "Stepan Snigirev",
    image: stepanImage,
    role: "Honorary Member",
    roleColor: "gray",
    description: "Main Developer of the Specter DIY and Specter Desktop now working on a quantum computer.",
    socialLinks: [
      { type: "x", url: "https://x.com/StepanSnigirev" },
      { type: "website", url: "https://stepansnigirev.com/" }
    ]
  },
  // Association Members
  {
    name: "k9ert",
    image: kimImage,
    role: "Association Member",
    roleColor: "gray",
    description: "A former key member of the Specter team who contributed to improving the software wallet.",
    socialLinks: [
      { type: "x", url: "https://x.com/k9ert" },
      { type: "linkedin", url: "https://www.linkedin.com/in/k9ert/" }
    ]
  },
  {
    name: "Polto",
    image: poltoImage,
    role: "Association Member",
    roleColor: "gray",
    description: "Led Specter workshops at conferences to promote knowledge and adoption within the community.",
    socialLinks: [
      { type: "x", url: "https://x.com/_polto_" },
      { type: "website", url: "https://hodling.ch/" }
    ]
  },
  {
    name: "Thomas",
    image: thomasImage,
    role: "Association Member",
    roleColor: "gray",
    description: "Designer of the Specter Snap Case, who also sells Specter DIYs at BitcoinStoreOrg.",
    socialLinks: [
      { type: "x", url: "https://x.com/Kayth21" },
      { type: "website", url: "https://bitcoin-store.org/" }
    ]
  }
];

export default function BoardMembers() {
  return (
    <section>
      <Card className="bg-specter-navy rounded-2xl p-8 shadow-2xl border-0">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Board of Directors & Members</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {boardMembers.map((member, index) => (
            <BoardMember key={index} member={member} />
          ))}
        </div>
      </Card>
    </section>
  );
}

