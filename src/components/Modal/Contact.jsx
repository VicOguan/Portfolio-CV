export function Modal({children}) {
    return (
        <div className="relative z-50">
            <div className="fixed inset-0 dark:bg-gray-800" aria-hidden="true"/>

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <div className="flex min-h-full items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
}