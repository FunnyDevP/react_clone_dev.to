import React, {FC} from "react";

const CreatesPost: FC = () => {
    return (
        <div className='flex flex-col mt-16 items-center'>
            <div className='bg-white w-4/6 rounded shadow-lg h-3/4'>
                <div className='px-16 py-8'>
                    {/*textarea: title*/}
                    <div className='mb-2'>

                        <textarea
                            placeholder='New post title here...'
                            className='resize-none outline-none text-4xl font-extrabold w-full'>

                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
//<div className="flex flex-col mt-16 items-center">
export default CreatesPost;