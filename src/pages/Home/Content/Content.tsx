import React, {FC, useEffect, useState} from "react";
import ContentTop from "./ContentTop/ContentTop";
import ContentTitle from "./ContentTitle/ContentTitle";
import ContentTag from "./ContentTag/ContentTag";
import {useRecoilState} from "recoil";
import {postState} from "../../../state/PostState";
import HttpClient from '../../../services/API/API'
import {Data} from "../../../services/models/HomeContent";

const Content: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [postData, setPostData] = useState<Data>()

    useEffect(() => {
        HttpClient.getAll().then((resp) => {
            setPostData(resp.data)

            setIsLoading(false)
        })
    }, [])
    return (
        <div>
            <div className="flex flex-col mt-16 items-center">
                {isLoading ? (<p className='text-xl'>loading...</p>): (
                    postData != undefined && (
                        <div className="grid gap-2.5  w-2/5 ">
                            {postData.data.map((hc) => (
                                <div className="bg-white rounded shadow p-5" key={hc.userId}>
                                    <ContentTop
                                        FullName={hc.fullName}
                                        PublicationDate={hc.publicationDate}
                                    />
                                    <ContentTitle Title={hc.blogTitle}/>
                                    <ContentTag Tags={hc.blogTags}/>
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Content;
