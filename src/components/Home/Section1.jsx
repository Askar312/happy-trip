import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import style from "../Home/style/Section1.module.css";

export default function ActionAreaCard() {
  return (
    <div className={style.containerSection1}>
      <Card sx={{ marginTop: 5, marginBottom: 5, maxWidth: 320 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://concept.kg/media/tours/inb/photos/horses2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Конный тур в Чон-Кемин
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Чон-Кемин – долина, между горами к Северу от Иссык-Куля и
              Казахстаном. Здесь имеется множество маршрутов для пеших и конных
              прогулок. Идеальное место для короткого отдыха во время выходных
              дней.
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Цена 1800 KGS
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ marginTop: 2.5, marginBottom: 2.5, maxWidth: 320 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://ic.pics.livejournal.com/vvtrofimov/16987819/509482/509482_original.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Цветочный тур в Кыргызстан
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Растительный мир в Кыргызстане насчитывает около четырех тысяч
              различных сортов растений. Это огромное биоразнообразие
              заключается в различных ландшафтах разной высоты и красоты. На
              альпийских лугах (около 3000 м над уровнем моря) растут
              эдельвейсы, одуванчики, альпийские астры, луковичные и травянистые
              первоцветы.
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Цена 2500 KGS
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ marginTop: 5, marginBottom: 5, maxWidth: 320 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://concept.kg/media/tours/inb/photos/alarcha3.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Тур в природный парк Ала-Арча
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Национальный парк Ала-Арча - это альпийский природный парк в горах
              Тянь-Шаня. Всего в 40 минутах езды от Бишкека вы окунитесь в
              захватывающий вид на природу - небесные горы.
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Цена 500 KGS
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
