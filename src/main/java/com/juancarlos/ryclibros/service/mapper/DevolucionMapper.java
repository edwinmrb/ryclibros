package com.juancarlos.ryclibros.service.mapper;

import com.juancarlos.ryclibros.domain.*;
import com.juancarlos.ryclibros.service.dto.DevolucionDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Devolucion} and its DTO {@link DevolucionDTO}.
 */
@Mapper(componentModel = "spring", uses = { UserMapper.class, PersonaMapper.class, PrestamoMapper.class })
public interface DevolucionMapper extends EntityMapper<DevolucionDTO, Devolucion> {
    @Mapping(target = "user", source = "user", qualifiedByName = "id")
    @Mapping(target = "persona", source = "persona", qualifiedByName = "id")
    @Mapping(target = "prestamo", source = "prestamo", qualifiedByName = "id")
    DevolucionDTO toDto(Devolucion s);
}
