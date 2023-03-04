import React, { useState } from 'react' 
import { useSelector } from 'react-redux';
import LabelCheckBox from './cs_component/LabelCheckBox';
import LabelSelect from './cs_component/LabelSelect'; 
function CaseStudy() {
    
    const [isDisableSelect, setDisableSelect] = useState(true); 
    const {caseStatusData: dataCaseStatus} = useSelector((initState) => initState.caseStatuses); 
    const handleOnChange = () => {
        setDisableSelect((init) => !init);
    }

    return (
        <div>
            <LabelCheckBox labelname="Case parties involved" onChange={handleOnChange}/>
            <LabelSelect disabled={isDisableSelect} setData={dataCaseStatus}/>
            
        </div>
    );
}

export default CaseStudy