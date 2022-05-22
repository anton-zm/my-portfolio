import styled from "styled-components"
import { Project } from "../types"

type IProps = {
    project: Project
}

const Wrapper = styled.figure`
    
`
const Img = styled.img`
    
`
const Title = styled.figcaption`
    
`

export const ProjectCard = ({project}: IProps) => {
    return (
        <Wrapper>
            <Img src={project.img} alt={project.title} />
            <Title>{project.title}</Title>
        </Wrapper>
    )
}

{/* <template>
  <figure @click="$emit('clickCard')" class="card">
    <img :src="img" :alt="alt" class="card__img" />
    <figcaption class="card__title">{{ title }}</figcaption>
  </figure>
</template>

<script>
import Popup from '@/components/popup'
export default {
  props: ['title', 'alt', 'img'],
  components: {
    Popup,
  },

  data() {
    return {
      popupImg: ``,
      popup: false,
    }
  },
}
</script>

<style scoped>
.card {
  cursor: pointer;
  position: relative;
}
.card:hover > .card__title {
  visibility: visible;
}
.card__img {
  width: 100%;
}
.card__title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: rgb(134, 130, 130);
  font-size: 32px;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-weight: 100;
  visibility: hidden;
  text-align: center;
}
@media screen and (max-width: 1140px) {
  .card__title {
    font-size: 24px;
  }
}
@media screen and (max-width: 600px) {
  .card__title {
    font-size: 18px;
    padding: 10px;
  }
}
</style>
 */}