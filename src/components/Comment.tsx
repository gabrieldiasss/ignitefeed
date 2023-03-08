import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void; 
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment} >
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" /> 

            <div className={styles.commentBox}>
                <div className={styles.commentContent} >
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernades</strong>
                            <time title='11 de Maio as 8:13h' dateTime="2022-05-11 08:13:30" >Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}