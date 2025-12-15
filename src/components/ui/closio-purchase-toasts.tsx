import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Notification = {
  id: number;
  name: string;
  state: string;
  createdAt: number;
};

const FIRST_NAMES = [
  "Alex", "Jordan", "Taylor", "Morgan", "Chris", "Sam", "Ryan", "Ava", "Sophia", "Liam",
  "Noah", "Ethan", "Mia", "Olivia", "James", "Lucas", "Mason", "Emily", "Daniel", "Isabella",
  "Logan", "Elijah", "Harper", "Chloe", "Aiden", "Ella", "Benjamin", "Henry", "Jack", "Grace",
  "Aria", "Natalie", "Carter", "Leo", "Wyatt", "Zoe", "Caleb", "Evan", "Nora", "Levi",
  "Gabriel", "Isaac", "Stella", "Miles", "Ruby", "Julia", "Dylan", "Scarlett", "Owen", "Abigail"
];

const US_STATES = [
  "California", "New York", "Texas", "Florida", "Georgia", "Arizona", "Illinois",
  "North Carolina", "New Jersey", "Colorado", "Tennessee", "Virginia", "Ohio",
  "Pennsylvania", "Massachusetts", "Oregon", "Washington", "Nevada", "Michigan",
  "Indiana", "Minnesota", "Utah", "Missouri", "Maryland", "South Carolina",
  "Alabama", "Kentucky", "Oklahoma", "Louisiana", "Idaho", "Wisconsin",
  "Arkansas", "Kansas", "Nebraska", "Montana", "New Mexico", "Iowa", "Mississippi",
  "Connecticut", "Delaware", "Maine", "Vermont", "New Hampshire", "Wyoming",
  "South Dakota", "North Dakota", "Rhode Island", "West Virginia", "Hawaii", "Alaska"
];

function pick<T>(list: T[]) {
  return list[Math.floor(Math.random() * list.length)];
}

function generateNotification(id: number): Notification {
  return {
    id,
    name: pick(FIRST_NAMES),
    state: pick(US_STATES),
    createdAt: Date.now(),
  };
}

const MAX_VISIBLE = 4;
const LIFETIME = 10000;

const NotificationItem = ({ item, onDismiss }: { item: Notification; onDismiss: (id: number) => void }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={item.id}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div
        className={cn(
          "pointer-events-auto relative overflow-hidden rounded-2xl",
          "border border-slate-600/60 bg-slate-900/40 backdrop-blur-xl",
          "shadow-[0_18px_45px_rgba(0,0,0,0.7)]",
          "px-3 sm:px-4 py-2.5 sm:py-3 min-w-0"
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70 notification-lines"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.24),transparent_60%)]"
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss(item.id);
          }}
          aria-label="Dismiss notification"
          className="absolute right-2 top-2 z-20 h-5 w-5 flex items-center justify-center rounded-full text-xs font-semibold text-gray-300/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          ×
        </button>

        <div className="relative z-10 space-y-0.5 text-white pr-4">
          <p className="font-semibold text-sm sm:text-base">
            Welcome to{" "}
            <span className="text-[#3F6AF2]">
              Closio
            </span>
          </p>
          <p className="text-sm sm:text-base truncate">{item.name} from {item.state}</p>
          <p className="text-xs text-white/75">Just joined the platform</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function ClosioPurchaseToasts() {
  const [items, setItems] = useState<Notification[]>([]);
  const idRef = useRef(1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const cleanupIntervalRef = useRef<ReturnType<typeof setInterval>>();

  const dismissNotification = useCallback((id: number) => {
    setItems((prev) => prev.filter((n) => n.id !== id));
  }, []);

  useEffect(() => {
    function scheduleNext() {
      const delay = 6000 + Math.random() * 12000;
      timeoutRef.current = setTimeout(() => {
        setItems((prev) => {
          const next = generateNotification(idRef.current++);
          const updated = [...prev, next];
          return updated.slice(-MAX_VISIBLE);
        });
        scheduleNext();
      }, delay);
    }

    scheduleNext();

    cleanupIntervalRef.current = setInterval(() => {
      const now = Date.now();
      setItems((prev) => prev.filter((n) => now - n.createdAt < LIFETIME));
    }, 2000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (cleanupIntervalRef.current) clearInterval(cleanupIntervalRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-20 sm:bottom-4 left-4 z-[100] flex flex-col gap-2 sm:gap-3 w-[calc(100vw-2rem)] max-w-[280px] sm:max-w-sm">
      <AnimatePresence initial={false}>
        {items.map((item) => (
          <NotificationItem key={item.id} item={item} onDismiss={dismissNotification} />
        ))}
      </AnimatePresence>
    </div>
  );
}
