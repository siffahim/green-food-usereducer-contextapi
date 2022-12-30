import React from 'react';

const Model = () => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="promo_model" className="modal-toggle bg-primary" />
            <div className="modal">
                <div className="modal-box relative text-center">
                    <label htmlFor="promo_model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations!!!</h3>
                    <p className="py-4"><strong>You Got Promo Code "sif"</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Model;