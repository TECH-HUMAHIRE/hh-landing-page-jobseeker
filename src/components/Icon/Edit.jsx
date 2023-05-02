import React from 'react';

// eslint-disable-next-line react/prop-types
const EditIcon = ({ active = false, color = '#666666' }) => {
    return (
        <span
            role="img"
            aria-label="container"
            className="anticon anticon-container ant-menu-item-icon">
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 2.33334C14.4417 2.33334 14.8584 2.50834 15.175 2.82501C15.4917 3.13334 15.6667 3.55001 15.6667 4.00001C15.6667 4.44167 15.4917 4.85834 15.175 5.175L5.63335 14.725C5.44169 14.9083 5.15835 15.0667 4.71669 15.2167C4.31669 15.35 3.85002 15.45 3.30002 15.5333C2.96669 15.5833 2.65002 15.6167 2.37502 15.6333C2.38335 15.5583 2.38335 15.4833 2.39169 15.4C2.46669 14.5417 2.60002 13.85 2.78335 13.2917C2.93335 12.8417 3.09169 12.5583 3.26669 12.375L12.825 2.81667C13.1334 2.50834 13.55 2.33334 14 2.33334ZM14 0.666672C13.1417 0.666672 12.2834 0.991672 11.6417 1.64167L2.09169 11.2C1.65002 11.6417 1.40002 12.1917 1.20835 12.7583C0.92502 13.6083 0.80002 14.525 0.733354 15.2417C0.666687 15.9667 0.666687 16.4833 0.666687 16.5C0.666687 16.7167 0.758354 16.9333 0.908354 17.0917C1.06669 17.2417 1.28335 17.3333 1.50002 17.3333C1.52502 17.3333 2.43335 17.3333 3.53335 17.175C4.08335 17.1 4.67502 16.975 5.24169 16.7917C5.80835 16.6 6.35835 16.35 6.80002 15.9083L16.3584 6.35834C17.0084 5.70834 17.3334 4.85001 17.3334 4.00001C17.3334 3.15001 17.0084 2.29167 16.3584 1.64167C15.7084 0.991672 14.85 0.666672 14 0.666672Z"
                    fill={color}
                />
            </svg>
        </span>
    );
};
export default EditIcon;
