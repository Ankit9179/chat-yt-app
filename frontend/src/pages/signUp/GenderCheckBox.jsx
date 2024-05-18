import React from "react";

const GenderCheckBox = ({ changeGenderFunction, selectedGender }) => {
    return (
        <div className="flex gap-4">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer  ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox"
                        checked={selectedGender === "male"}
                        onChange={() => changeGenderFunction("male")}
                        className="checkbox border-slate-900" />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox"
                        checked={selectedGender === "female"}
                        onChange={() => changeGenderFunction("female")}
                        className="checkbox border-slate-900" />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckBox;
