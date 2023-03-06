import React, { useState } from 'react' 
import { useDispatch, useSelector } from 'react-redux'; 
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
import { classNames } from '../utilities';
import { loadingFalse, loadingFalseAnimated, loadingTrue } from '@/src/redux/actions/loader';

function CaseStudy() {
    const dispatch = useDispatch();
    const [isDisableSelect, setDisableSelect] = useState(false); 
    const {utilsdata: casestatuses} = useSelector((initState) => initState.caseStatuses);
    const {utilsdata: categoryCase} = useSelector((initState) => initState.categoryCase); 
    const {token} = useSelector((initState) => initState.userInfo); 
    const [isCategorizeCase, setCategorizeCase] = useState(null);
    const [isSearching, setSearching] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [oldsearch, setOldSearch] = useState([]);  
    const [isFullname, setFullname] = useState('');
    const [isStudentNumber, setStudentNumber] = useState('');
    const [isClaimable, setClaimable] = useState(null);
    const [isDetails, setDetails] = useState('');
    const [isCasePartiesValue, setCasePartiesValue] = useState(null);
    const [isSpecify, setSpecify] = useState('');
    const [isError, setError] = useState({});
    // error message  

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
        setCategorizeCase(parseInt(value.target.value));
    }
    
    const handleCaseParties = (event) => { 
        setCasePartiesValue(parseInt(event.target.value))
    }

    const handleSubmit = () => {
        const payload = {
            student_number: isStudentNumber,
            case_parties_enable: isDisableSelect,
            case_parties_id: isCasePartiesValue,
            detail_text: isDetails,
            categorize_id: isCategorizeCase,
            claimable: isClaimable,
            specify_desc: isSpecify
        }; 
        dispatch(loadingTrue());
        axios.post(route('case_study_store'), payload).then(async (response) => {
           const datacollect = response.data; 
           if(datacollect.error) { 
              setError(datacollect.data);
              dispatch(loadingFalse());
           } else {
              const loading = await dispatch(loadingFalseAnimated());
              if(loading) {
                  handleCancel();
              }  
           }
        });
    }    
    
    const handleTextArea = (event) => {
        setSpecify(event.target.value);
    }
    
    const handleCancel = () => {
        setStudentNumber('');
        setSearching('');
        setFullname('');
        setDisableSelect(false);
        setCasePartiesValue(null); 
        setDetails('');
        setSpecify('');
        setCategorizeCase(null);
        setError({});
        $('#submit_form').trigger('reset'); 
        document.getElementsByClassName("ql-editor")[0].innerHTML = "";
    }
 
    return (
        <form className="flex flex-1 flex-col" id="submit_form">
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
                        labeltext="Student Number" 
                        setValue={isStudentNumber}
                        error={isError.params?.includes('student_number') && true}
                        errorMessage={isError.error_list && isError.error_list[isError.params?.findIndex(index => index == 'student_number')]}
                    />
                </div>
                <div className="w-full lg:w-1/3">
                    <DisableInputs 
                        id="input_fullname" 
                        labeltext="Student Name" 
                        setValue={isFullname}
                    />
                </div>
            </div>
            <LabelCheckBox id="case_id" checked={isDisableSelect} labelname="Case parties involved" onChange={handleOnChange}/>
            <LabelSelect id="case_involved" 
                disabled={!isDisableSelect} 
                setData={casestatuses} 
                onChange={handleCaseParties}
                error={isError.params?.includes('case_parties_id') && true}
                errorMessage={isError.error_list && isError.error_list[isError.params?.findIndex(index => index == 'case_parties_id')]}
            />
            <CustomTextArea 
                onChange={setDetails}
                error={isError.params?.includes('detail_text') && true}
                errorMessage={isError.error_list && isError.error_list[isError.params?.findIndex(index => index == 'detail_text')]}
            />
            <div className="toolbar mt-20 lg:mt-14">
                <label htmlFor="categorize_case" 
                    className={classNames(
                        "text-sm", 
                        isError.params?.includes('categorize_id') && "text-red-500"
                        )}>Categorize Case <span className="text-red-600">*</span></label>
                <LabelSelect 
                    id="categorize_case" 
                    setData={categoryCase} 
                    onChange={handleOnchangeCategorycase}
                    error={isError.params?.includes('categorize_id') && true}
                    errorMessage={isError.error_list && isError.error_list[isError.params?.findIndex(index => index == 'categorize_id')]}
                />
            </div>
            {isCategorizeCase == 6 && (
                <div className="flex flex-col">
                    <div className="flex flex-row py-2">
                        <LabelCheckBox 
                            onChange={() => setClaimable(true)} 
                            checked={isClaimable == true ? true: false} 
                            labelname="Claimable" 
                            id="claim_id"
                            error={isError.params?.includes('claimable') && true}
                        />
                        <LabelCheckBox 
                            onChange={() => setClaimable(false)}
                            checked={isClaimable == false ?  true : false}
                            labelname="Not Claimable" 
                            id="not_claim_id"
                            error={isError.params?.includes('claimable') && true}
                        />
                    </div>
                    {isError.params?.includes('claimable') && (<span 
                        className="text-sm text-red-500">
                            {isError.error_list && isError.error_list[isError.params?.findIndex(index => index == 'claimable')]}
                        </span>)
                    }
                </div>
            )}
            {(isCategorizeCase == 6 || isCategorizeCase == 7) && (
                <TextArea 
                error={isError.params?.includes('specify_desc') && true}
                errorMessage={isError.error_list && isError.error_list[isError.params?.findIndex(index => index == 'specify_desc')]}
                labelText="Specify here" placeholder="Text here..." onChange={handleTextArea} />
            )}  
            <div className="flex flex-row gap-2 my-3"> 
                <ButtonSuccess buttonText="Submit" onClick={handleSubmit}/> 
                <ButtonDanger buttonText="Cancel" onClick={handleCancel}/> 
            </div>
        </form>
    );
}

export default CaseStudy