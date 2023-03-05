import React, { useState } from 'react' 
import { useSelector } from 'react-redux'; 
import ButtonDanger from './cs_component/ButtonDanger';
import ButtonSuccess from './cs_component/ButtonSuccess';
import CustomTextArea from './cs_component/CustomTextArea';
import DisableInputs from './cs_component/DisableInputs';
import LabelCheckBox from './cs_component/LabelCheckBox';
import LabelSelect from './cs_component/LabelSelect'; 
import SearchBar from './cs_component/SearchBar';
import TextArea from './cs_component/TextArea';
import axios from 'axios';
import { useEffect } from 'react';

function CaseStudy() {
    
    const [isDisableSelect, setDisableSelect] = useState(true); 
    const {utilsdata: casestatuses} = useSelector((initState) => initState.caseStatuses);
    const {utilsdata: categoryCase} = useSelector((initState) => initState.categoryCase); 
    const {token} = useSelector((initState) => initState.userInfo); 
    const [isConfiscated, setConfiscated] = useState(0);
    const [isSearching, setSearching] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [oldsearch, setOldSearch] = useState([]);  
    const [isFullname, setFullname] = useState('');
    const [isStudentNumber, setStudentNumber] = useState('');
    const [isClaimable, setClaimable] = useState(null);
    const [isDetails, setDetails] = useState('');

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get(route('registrar_student_list')).then((response) =>{ 
            const {registrar_recordslist} = response.data; 
            setSearchList(registrar_recordslist);
            setOldSearch(registrar_recordslist);
        }); 
    }, []);

    const handleOnChange = () => {
        setDisableSelect((init) => !init);
    } 
    const handleSearching = (value) => {
        setSearching(value.target.value);  
        let updatedList = [...oldsearch];
        updatedList = updatedList.filter((item) => 
            item.Student_ID.toString().includes(value.target.value) || 
            item.Firstname.toLowerCase().toString().includes(value.target.value.toLowerCase()) ||
            item.Lastname.toLowerCase().toString().includes(value.target.value.toLowerCase())
        );
        setSearchList(updatedList);
        if(!value.target.value) {
            setStudentNumber('');
            setFullname('');
        }
    }
    const onSelectedItem = (value) => { 
        setSearching(value.Student_ID);
        setStudentNumber(value.Student_ID);
        setFullname(`${value.Lastname}, ${value.Firstname} ${value.Middlename[0]}.`)
    }
    const handleOnchangeCategorycase = (value) => { 
        setConfiscated(value.target.value);
    }
 
    return (
        <div className="flex flex-1 flex-col ">
            <div className="my-3 flex flex-1 flex-row justify-end">
                <SearchBar 
                    onChangeText={handleSearching} 
                    onSelectedItem = {onSelectedItem}
                    searchValue={isSearching} 
                    setDataSearch={searchList}
                /> 
            </div> 
            <div className="flex flex-1 flex-col lg:flex-row gap-3 mb-3">
                <div className="w-full lg:w-1/3">
                    <DisableInputs 
                        id="input_student_num" 
                        labeltext="Student number" 
                        setValue={isStudentNumber}
                    />
                </div>
                <div className="w-full lg:w-1/3">
                    <DisableInputs 
                        id="input_fullname" 
                        labeltext="Student fullname" 
                        setValue={isFullname}
                    />
                </div>
            </div>
            <LabelCheckBox id="case_id" labelname="Case parties involved" onChange={handleOnChange}/>
            <LabelSelect disabled={isDisableSelect} setData={casestatuses}/>
            <CustomTextArea onChange={setDetails}/>
            <div className="toolbar mt-20 lg:mt-14">
                <label htmlFor="categorize_case" className="text-sm">Categorize Case <span className="text-red-600">*</span></label>
                <LabelSelect id="categorize_case" setData={categoryCase} onChange={handleOnchangeCategorycase}/>
            </div>
            {isConfiscated == 6 && (
                <div className="flex flex-row py-2">
                    <LabelCheckBox 
                        onChange={() => setClaimable(true)} 
                        checked={isClaimable == true ? true: false} 
                        labelname="Claimable" 
                        id="claim_id"
                    />
                    <LabelCheckBox 
                        onChange={() => setClaimable(false)}
                        checked={isClaimable == false ?  true : false}
                        labelname="Not Claimable" 
                        id="not_claim_id"
                    />
                </div>
            )}
            {(isConfiscated == 6 || isConfiscated == 7) && (
                <TextArea labelText="Specify here" placeholder="Text here..."/>
            )} 
            <div className="flex flex-row gap-2 my-3"> 
                <ButtonSuccess buttonText="Submit" /> 
                <ButtonDanger buttonText="Cancel"/> 
            </div>
        </div>
    );
}

export default CaseStudy