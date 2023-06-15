import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import { getNextYear } from "../../shared/utils";
 
const cookies = new Cookies();

interface IComment {
  name: string;
  message: string;
  time: number;
}

export function useComment (idMeals: string) {
  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    const oldComments = cookies.get(`comment-${idMeals}`);
    if (oldComments) {
      setComments(oldComments);
    }
  }, [idMeals])

  function addComment (comment: IComment) {
    const newComments = [...comments];
    newComments.push(comment);
    setComments(newComments);
    cookies.set(`comment-${idMeals}`, JSON.stringify(newComments), {
      expires: getNextYear()
    });
  }

  return {
    comments,
    addComment,
  }
}