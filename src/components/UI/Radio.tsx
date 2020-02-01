import React, { ReactNode } from 'react';

import './Radio.scss';

const Radio = ({ label, options, name, value, onChange, row, className }: RadioProps) => (
	<div className={`radio ${row ? 'row' : ''} ${className || ''}`}>
		<div className="radio-label">{label}</div>

		<div className="radio-container">
			{options.map((option) => (
				<label key={option.value}>
					<input
						type="radio"
						name={name}
						value={option.value}
						checked={value === option.value}
						onChange={(e) => onChange(e.target.value)}
					/>

					<div className="radio-value">
						<i className="far fa-circle" />
					</div>

					{option.name}
				</label>
			))}
		</div>
	</div>
);

interface Option {
	name: string;
	value: string;
}

interface RadioProps {
	/**
	 * Label of the field
	 */
	label: ReactNode;
	/**
	 * Available values
	 */
	options: Array<Option>;
	/**
	 * Value of the field
	 */
	value: string;
	/**
	 * Function triggered when the value change
	 */
	onChange: (value: string | number) => void;
	/**
	 * Used to identify a group of radio inputs
	 */
	name: string;
	/**
	 * Should the inputs be in a row ?
	 */
	row?: boolean;
	/**
	 * Class to apply to the container
	 */
	className?: string;
}

export default Radio;