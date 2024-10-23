import React from 'react';
import {useForm} from "react-hook-form";
import styles from "./FormComponent.module.css"
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../../validator/post.validator";
import {IForm} from "../../models/IForm";
import {apiService} from "../../services/api.json.service";


const FormComponent = () => {

    const {
        handleSubmit,
        register,
        reset,
        formState: {
            errors,
            isValid}} = useForm<IForm>({mode:'all', resolver:joiResolver(postValidator)});


    const customHandler = async (dataFromForm:IForm) => {
        // action for form what you would like to do

        console.log(await apiService.post.savePost(dataFromForm));
        // clean form after send
        reset();
    }



    return (
        <div className={styles.formComp}>
            <h3>FORM</h3>
            <div className={styles.formBord}>

                <form onSubmit={handleSubmit(customHandler)}>
                    <div>
                        <label>
                            <input type={"text"} placeholder={'Title'} {...register('title')} />
                        </label>
                        {errors.title && <div>{errors.title.message}</div>}
                    </div>
                    <div>
                        <label>
                            <input type={"text"} placeholder={'What you wish write'} {...register('body')} />
                        </label>
                        {errors.body && <div>{errors.body.message}</div>}
                    </div>
                    <div>
                        <label>
                            <input type={"number"} placeholder={'Yor`s card number'} {...register('userId')}/>
                        </label>
                        {errors.userId && <div>{errors.userId.message}</div>}
                    </div>

                    {/*<textarea name={'text'} placeholder={"text"}></textarea>*/}

                    <button disabled={!isValid} >Save</button>
                </form>

            </div>
        </div>
    );
};

export default FormComponent;