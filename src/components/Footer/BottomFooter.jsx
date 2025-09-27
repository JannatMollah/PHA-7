import React from 'react';

const BottomFooter = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
            </aside>
        </footer>
    );
};

export default BottomFooter;