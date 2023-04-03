/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useMemo, useState } from 'react';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TocContextType {
  toc: Array<TocItem>;
  setToc: React.Dispatch<React.SetStateAction<Array<TocItem>>>;
}

interface TocProviderProps {
  children: React.ReactNode;
}

export const TocContext = createContext<TocContextType>({
  toc: [],
  setToc: () => {},
});

export default function TocProvider({ children }: TocProviderProps) {
  const [toc, setToc] = useState<Array<TocItem>>([]);

  const tocContext = useMemo(() => {
    return {
      toc,
      setToc,
    };
  }, [toc, setToc]);

  return (
    <TocContext.Provider value={tocContext}>{children}</TocContext.Provider>
  );
}
