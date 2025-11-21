import { useState, useEffect } from "react";

export const useFetch = ({apiPath}, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `${process.env.REACT_APP_BASE_URL}${apiPath}${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    const settings = { 
        method: 'GET', 
        headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTI3MDQ3NGYzNTkyNGMzMGJmYmMzYjk3NWIyMDNmZCIsIm5iZiI6MTc2MzY0OTQyOS4zMTMsInN1YiI6IjY5MWYyNzk1Yjg2MDcxMGFkOGZhMmIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gG56YfL8Qna44zh9MN7JHI0GVRE9jm4mOMlPAn9qvjo',
        'Accept': 'Authorization'
        } 
    }

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url, settings);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])

  return { data }
}