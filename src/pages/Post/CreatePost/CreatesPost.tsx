import React, {FC, useState} from "react";
import SelectTag from './SelectTag/SelectTag'
import {useRecoilValue} from "recoil";
import {PostSelector} from "../../../selector/PostSelector";

const CreatesPost: FC = () => {
    const [title, setTitle] = useState("")
    const tagVal = useRecoilValue(PostSelector)

    const handleTitleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target.value)
    }
    const handlePublish = () => {

        console.log(title,tagVal)
    }
    return (
        <div className='flex flex-col mt-16 items-center'>
            <div className='bg-white w-4/6 rounded shadow-lg h-3/4'>
                <div className='px-16 py-8'>
                    {/*textarea: title*/}
                    <div className='mb-2'>
                        <textarea
                            placeholder='New post title here...'
                            className='resize-none outline-none text-4xl font-extrabold w-full'
                            onChange={(
                                ev: React.ChangeEvent<HTMLTextAreaElement>,
                            ): void => handleTitleChange(ev)}>
                        </textarea>
                    </div>
                    <SelectTag/>

                </div>
            </div>
            <div className='pt-2 w-4/6'>
                <button className='py-2 px-4 bg-bt-primary text-white rounded hover:bg-bt-secondary text-base' onClick={handlePublish}>
                    Publish
                </button>
            </div>
        </div>
    )
}

export default CreatesPost;