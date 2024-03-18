import images from '~/assets/images';
import Introduce from '~/Component/Introduce';
import Poster from '~/Component/Poster';
function Story() {
    return (
        <div>
            <Poster img={images.storyImg} half posterName="story" />
            <Introduce
                introduceName="OUR BEGINNING"
                introduceDescr="Couvee is a brand of food and beverages from Yogyakarta, Indonesia. It was founded by two young man, on April 2017.  They started the business together in a modest rented building at Jalan Kaliurang Km 5. "
                imageUrl={images.oldStory}
            />

            <Introduce
                reverse
                introduceName="OUR BACKGROUNDS"
                introduceDescr="Couvee comes from the idea that everyone can enjoy coffee. It doesn’t matter if you like your coffee light and sweet, or you prefer strong coffee with no sugar, you can always enjoy it with your personal preferences in here. It’s our pleasure to help you find the best crafted drink that suits your taste in the best way."
                imageUrl={images.ourBackgroundStory}
            />
        </div>
    );
}

export default Story;
