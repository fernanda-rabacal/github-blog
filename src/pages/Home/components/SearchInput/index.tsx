import { SearchSection } from "./styles";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

interface SearchInputProps {
  postsQuantity: number
  getPosts: (query?: string) => Promise<void>;
}

const searchFormSchema = z.object({
  query: z.string()
})

type searchFormInputs = z.infer<typeof searchFormSchema>


export function SearchInput({postsQuantity, getPosts} : SearchInputProps) {
  const { register, handleSubmit } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchPosts(data: searchFormInputs) {
    await getPosts(data.query)
  }

  return(
    <SearchSection onSubmit={handleSubmit(handleSearchPosts)}>
        <label htmlFor="post-search">
          <span>
            <h4>Publicações</h4>
            <p>{postsQuantity == 1 ? `${postsQuantity} publicação` : `${postsQuantity} publicações` }</p>
          </span>
          <input 
            id="post-search" 
            type="search" 
            placeholder="Buscar conteúdo"
            {...register('query')} />
        </label>
      </SearchSection>
  )
}