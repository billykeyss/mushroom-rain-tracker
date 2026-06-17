"use client";

import { useEffect } from "react";
import { useClipboard } from "@/lib/clipboard-context";

interface Props {
  id: string;
  commonName: string;
  scientific: string;
}

/** Mounts inside a species detail page and pushes the entry into the
 *  Field Clipboard recent stack on first render. */
export default function ClipboardTouch({ id, commonName, scientific }: Props) {
  const { touch } = useClipboard();
  useEffect(() => {
    touch(id, commonName, scientific);
  }, [id, commonName, scientific, touch]);
  return null;
}
