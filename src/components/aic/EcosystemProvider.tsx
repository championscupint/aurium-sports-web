"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { EcosystemStore, BFIInstitution, RegionalHub } from "@/types/ecosystem";
import { INITIAL_ECOSYSTEM_STORE } from "@/data/initial-store";
import bfiCensusData from "@/data/bfis-census.json";

interface EcosystemContextValue {
  store: EcosystemStore;
  bfis: BFIInstitution[];
  regionalHubs: RegionalHub[];
  loading: boolean;
  refreshStore: () => Promise<void>;
  mutateStore: (action: string, payload: Record<string, unknown>, adminKey?: string) => Promise<{ ok: boolean; error?: string }>;
}

const EcosystemContext = createContext<EcosystemContextValue>({
  store: INITIAL_ECOSYSTEM_STORE,
  bfis: (bfiCensusData as { bfis: BFIInstitution[] }).bfis,
  regionalHubs: (bfiCensusData as { regionalHubs: RegionalHub[] }).regionalHubs,
  loading: false,
  refreshStore: async () => {},
  mutateStore: async () => ({ ok: false }),
});

export function EcosystemProvider({ children }: { children: React.ReactNode }) {
  const [store, setStore] = useState<EcosystemStore>(INITIAL_ECOSYSTEM_STORE);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshStore = useCallback(async () => {
    try {
      const res = await fetch("/api/ecosystem", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data.store) {
          setStore(data.store);
        }
      }
    } catch (e) {
      console.warn("Using local initial store fallback:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshStore();
  }, [refreshStore]);

  const mutateStore = async (action: string, payload: Record<string, unknown>, adminKey?: string) => {
    try {
      const res = await fetch("/api/ecosystem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, payload, adminKey }),
      });
      const data = await res.json();
      if (!res.ok) {
        return { ok: false, error: data.error || "Action failed" };
      }
      if (data.store) {
        setStore(data.store);
      }
      return { ok: true };
    } catch (err: unknown) {
      return { ok: false, error: err instanceof Error ? err.message : "Network error" };
    }
  };

  return (
    <EcosystemContext.Provider
      value={{
        store,
        bfis: (bfiCensusData as { bfis: BFIInstitution[] }).bfis,
        regionalHubs: (bfiCensusData as { regionalHubs: RegionalHub[] }).regionalHubs,
        loading,
        refreshStore,
        mutateStore,
      }}
    >
      {children}
    </EcosystemContext.Provider>
  );
}

export function useEcosystem() {
  return useContext(EcosystemContext);
}
