import {PostTag, PostTagOption} from "../../../../services/models/PostTag";
import React, {FC, useEffect, useState} from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {useRecoilState} from "recoil";
import {postTagState} from "../../../../state/PostState";

export const postTagFromAPIToOptions = (data: PostTag[]): PostTagOption[] => (
    data.map<PostTagOption>((data) => {
        return {
            label: data.name,
            value: data
        }
    })
)

const dummyPostTag: PostTag[] = [
    {id: "1",name:"javascript"},
    {id: "2",name:"webdev"},
    {id: "3",name:"beginners"},
    {id: "4",name:"programming"},
    {id: "5",name:"tutorial"},
    {id: "6",name:"react"},
]

const animatedComponents = makeAnimated();

const SelectTag:FC = () => {
    const [tagOptions, setTagOption] = useState<PostTagOption[]>([])
    const [_, setPostTag] = useRecoilState(postTagState)
    useEffect(() => {
        setTagOption(postTagFromAPIToOptions(dummyPostTag))
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