"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/original-work/call-it-all-love");
  }, [router]);
  return null;
}
