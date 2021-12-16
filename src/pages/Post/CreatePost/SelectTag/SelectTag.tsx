import {PostTag, PostTagOption, PostTagResponse} from "../../../../services/models/PostTag";
import React, {FC, useEffect, useState} from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {useRecoilState} from "recoil";
import {postTagState} from "../../../../state/PostState";
import {httpClient} from "../../../../services/API/API";

export const postTagFromAPIToOptions = (data: PostTag[]): PostTagOption[] => (
    data.map<PostTagOption>((data) => {
        return {
            label: data.name,
            value: data
        }
    })
)

const animatedComponents = makeAnimated();

const SelectTag:FC = () => {
    const [tagOptions, setTagOption] = useState<PostTagOption[]>([])
    const [_, setPostTag] = useRecoilState(postTagState)
    useEffect(() => {
        httpClient.getAll<PostTagResponse>("/post/tags").then((resp) => {
            console.log(resp.data)
            if (resp.data.data != undefined) {
                setTagOption(postTagFromAPIToOptions(resp.data.data))
            }else {
                setTagOption([])
            }

        })

    },[])

    const handleChangeTag = (options: PostTagOption[]) => {
        console.log("select tag")
        const postTags = options.map<PostTag>((opt) => opt.value)
        setPostTag(postTags)
    }
  return (
      <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={tagOptions}
          onChange={(e) => {
              const aaa = e as PostTagOption[]
              handleChangeTag(aaa)
          }}
          placeholder={'Add up to 4 tags...'}/>
  )
}

export default SelectTag