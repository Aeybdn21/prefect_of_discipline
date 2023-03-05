import React, { useState } from 'react' 
import { useSelector } from 'react-redux';
import { classNames } from '../utilities';
import ButtonDanger from './cs_component/ButtonDanger';
import ButtonSuccess from './cs_component/ButtonSuccess';
import CustomTextArea from './cs_component/CustomTextArea';
import LabelCheckBox from './cs_component/LabelCheckBox';
import LabelSelect from './cs_component/LabelSelect'; 
import SearchBar from './cs_component/SearchBar';



function CaseStudy() {
    
    const [isDisableSelect, setDisableSelect] = useState(true); 
    const {utilsdata: casestatuses} = useSelector((initState) => initState.caseStatuses);
    const {utilsdata: categoryCase} = useSelector((initState) => initState.categoryCase); 

    const handleOnChange = () => {
        setDisableSelect((init) => !init);
    }
 
    return (
        <div className="flex flex-1 flex-col ">
            <div className="my-3">
                <SearchBar/> 
            </div>
            <LabelCheckBox id="case_id" labelname="Case parties involved" onChange={handleOnChange}/>
            <LabelSelect disabled={isDisableSelect} setData={casestatuses}/>
            <CustomTextArea/>
            <div className="toolbar mt-20 lg:mt-14">
                <label htmlFor="categorize_case" className="text-sm">Categorize Case <span className="text-red-600">*</span></label>
                <LabelSelect id="categorize_case" setData={categoryCase} />
            </div>
            <div className="flex flex-row py-2">
                <LabelCheckBox labelname="Claimable" id="claim_id"/>
                <LabelCheckBox labelname="Not Claimable" id="not_claim_id"/>
            </div>
            <div className="md:w-1/2">
                <label htmlFor="specify_id" className="text-sm">Specify here <span className="text-red-600">*</span></label>
                <textarea 
                id="specify_id"
                placeholder="Text here..."
                className={classNames(
                    "placeholder:italic placeholder:text-slate-400", 
                    "block bg-white w-full border border-slate-300",
                    "rounded-md py-1.5 pr-3  focus:outline-none focus:border-sky-500",
                    "focus:ring-sky-500 focus:ring-1 sm:text-sm h-28")}>
                </textarea>
            </div>
            <div className="flex flex-row gap-2 my-3">
             <div>
                <ButtonSuccess buttonText="Submit" />
             </div>
             <div>
                <ButtonDanger buttonText="Cancel"/>
             </div>
            </div>
        </div>
    );
}

export default CaseStudy