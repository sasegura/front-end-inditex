import { CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import "./podcastDescriptionCard.css"

interface PodcastDescriptionProps {
    imageUrl: string;
    imageAuthor: string;
    imageTitle: string;
    imageDescription: string;
    onHandleCardClick: () => void;
}

function PodcastDescriptionCard(props: PodcastDescriptionProps) {

    const {
        imageUrl,
        imageAuthor,
        imageTitle,
        imageDescription,
        onHandleCardClick
    } = props

    return (

        <CardActionArea onClick={onHandleCardClick}>
            <CardMedia
                component="img"
                image={imageUrl}
                alt="imageTitle"
                className="imagePodDetail"
            />

            <CardContent className="contentPodDetail" >
                <Divider />
                <div>
                    <Typography variant="subtitle1"><b>{imageTitle}</b></Typography>
                    <Typography variant="body1"> <i>{`by ${imageAuthor}`}</i> </Typography>
                </div>
                <Divider />
                <div>
                    <Typography variant="subtitle2"><b>Description:</b></Typography>
                    <Typography variant="body2" color="text.secondary">
                        <i>{imageDescription}</i>
                    </Typography>
                </div>
            </CardContent>
        </CardActionArea>

    )
}

export default PodcastDescriptionCard;