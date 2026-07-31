export default function ScrollIndicator() {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex h-12 w-7 justify-center rounded-full border border-white/40">
                <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-gold" />
            </div>
        </div>
    );
}