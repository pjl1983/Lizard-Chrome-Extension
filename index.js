var images = document.getElementsByTagName('img');

var lizardImages = [
	"http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg",
	"http://animals.sandiegozoo.org/sites/default/files/2017-07/animals-lizard-redheadedrockagama.jpg",
	"https://www.theodysseyonline.com/lizards-are-great",
	"https://az616578.vo.msecnd.net/files/2016/09/05/636086927483815928683495227_animals-lizards-1680x1050-wallpaper-1639954.jpg",
	"https://doowans.com/wp-content/uploads/2013/07/lizard1.jpg",
	"https://news.nationalgeographic.com/content/dam/news/2015/10/24/lizardnoise/1lizardnoise.ngsversion.1445695201324.adapt.1900.1.jpg",
	"https://voices.nationalgeographic.org/files/2013/12/1-one-way-breathing-lizard-s2048x1957-p.jpg",
	"http://crybytes.com/wp-content/uploads/crybytes-lizard.jpg",
	"https://i.ytimg.com/vi/UZbRv3xEy3E/maxresdefault.jpg",
	"https://www.popsci.com/sites/popsci.com/files/beardeddragon03.jpg",
	"https://undergroundreptiles.com/wp-content/uploads/2017/06/westernfencelizard4.jpg",
	"https://belize-travel-blog.chaacreek.com/wp-content/uploads/2014/05/soparla-iguana-verde4.jpg",
	"https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/notalizardno.jpg",
	"http://deskbg.com/s3/wpp/23/23600/cute-lizard-desktop-background.jpg",
	"https://www.safariltd.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/6/260529-Frilled-Lizard_1.jpg",
	"https://kidssearch.com/picsearch/images/lizard-pic-1024x905-a2e0e79.png",
	"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/APpHoTX/videoblocks-lizard-tongue-flicking-slow-motion-zoom-out-4k_hxxkechzhe_thumbnail-full01.png",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Komodo_dragon_with_tongue.jpg/1200px-Komodo_dragon_with_tongue.jpg",
	"https://hightimes.com/wp-content/uploads/2017/04/Arizona-Police-Lizard.jpg",
	"http://forums.mtbr.com/attachments/arizona/273442d1182360295-ot-az-related-regal-horned-lizard-horned-lizard.jpg"
]

for (var i = 0; i < images.length; i++) {
	let number = Math.floor(Math.random() * lizardImages.length - 1) + 1;
	let img = lizardImages[number];
	images[i].src = img;
}