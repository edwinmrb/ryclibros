package com.juancarlos.ryclibros.service.mapper;

import com.juancarlos.ryclibros.domain.*;
import com.juancarlos.ryclibros.service.dto.LocalidadDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Localidad} and its DTO {@link LocalidadDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface LocalidadMapper extends EntityMapper<LocalidadDTO, Localidad> {
    @Named("id")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "nombre", source = "nombre")
    LocalidadDTO toDtoId(Localidad localidad);
}
