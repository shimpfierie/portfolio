import React from "react";
import "./github.css"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react";

const Github = () => {
    const [avatarURL, setAvatarURL] = useState()
    const [githubName, setGithubName] = useState()
    const [githubBio, setGithutBio] = useState()

    async function repoData() {
        await fetch('https://api.github.com/users/shimpfierie')
    }

    useEffect(() => {
        fetch('https://api.github.com/users/shimpfierie')
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result)
                setAvatarURL(result.avatar_url)
                setGithubName(result.name)
                setGithutBio(result.bio)
            },
            (error) => {
                console.log(error)
            }
        )
    }, [])

    return (
        <div className="flex pl-2 mt-8 justify-start align-start">
            <div className="experience flex-col p-1 shadow-md justify-end text-center items-center">
                <Card style={{width:'18rem' }} >
                    <Card.Img variant="top" src={avatarURL} />
                    <Card.Body>
                        <Card.Title>{githubName}</Card.Title>
                        <Card.Text>
                            {githubBio}
                        </Card.Text>
                        <Button variant='primary'>Repositories</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Github