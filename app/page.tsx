"use client";

import { useAppDispatch } from "@/lib/hooks";
import { useAppSelector } from "@/lib/hooks";
// import { setTheme } from "@/lib/features/ui/themeSlice";
// import { Theme } from "@/interface/ui";
import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import Highlight from "@/components/home/highlight";
import MoreNfts from "@/components/home/more-nft";
import HowItWorks from "@/components/home/how-it-works";
import Footer from "@/components/footer";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { useEffect } from "react";
import { walletConnected } from "@/lib/features/user/userSlice";
import { setLoadingState } from "@/lib/features/ui/uiSlice";
import Statistics from "@/components/home/statistics";
import FeaturedCollections from "@/components/home/featured-collections";
import Benefits from "@/components/home/benefits";
import { fetchAllUsers, fetchContractBalance, fetchNftsMinted } from "@/lib/features/overview/overviewSlice";

export default function Home() {
  // const [file, setFile] = useState<File>();
  // const [url, setUrl] = useState("");
  // const [uploading, setUploading] = useState(false);
  const { universalAccount } = usePushWalletContext()

  const dispatch = useAppDispatch();
  // const theme = useAppSelector((state) => state.theme.theme)
  // const totalBalance = useAppSelector((state) => state.overview.totalBalance);

  // const uploadFile = async () => {
  //   setUrl("")
  //   try {
  //     if (!file) {
  //       alert("No file selected");
  //       return;
  //     }

  //     setUploading(true);
  //     const data = new FormData();
  //     data.set("file", file);
  //     const uploadRequest = await fetch("/api/files", {
  //       method: "POST",
  //       body: data,
  //     });

  //     const signedUrl = await uploadRequest.json();
  //     console.log(signedUrl)
  //     const { gatewayUrl } = signedUrl;
  //     setUrl(gatewayUrl);
  //     setUploading(false);
  //   } catch (e) {
  //     console.log(e);
  //     setUploading(false);
  //     alert("Trouble uploading file");
  //   }
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFile(e.target?.files?.[0]);
  // };


  useEffect(() => {
    if (universalAccount) {
      dispatch(walletConnected(universalAccount.address))
      dispatch(setLoadingState('wallet-connected'))
    }
  }, [universalAccount])

  useEffect(() => {
    dispatch(fetchContractBalance());
    dispatch(fetchNftsMinted());
    dispatch(fetchAllUsers());
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Statistics />
      <Highlight />
      <FeaturedCollections />
      <MoreNfts />
      <HowItWorks />
      <Benefits />
      <Footer />
    </main>
  );
}
